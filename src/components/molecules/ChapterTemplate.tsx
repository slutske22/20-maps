import React, { useState, useContext, useMemo, useEffect } from 'react';
import type { ReactElement, Component } from 'react';
import styled from 'styled-components';
import TrackVisibility from 'react-visibility-sensor';
import { Context } from '../../context';
import {
	MapContainer,
	MapSpinner,
	SideCar,
	Page,
	PageContent,
	PageTitle,
	PageText,
} from '../atoms';
import MapTemplate from './MapTemplate';
import { PageTypes, MetaData, MapProps, CustomFeaturesArgs } from '../../types';

type WrapperProps = {
	height?: string;
	screensTall?: number;
	maptheme: string;
};

const Wrapper = styled.section<WrapperProps>`
	width: 100%;
	height: ${(props) =>
		props.height || `${props.screensTall * 100}vh` || `auto`};
	min-height: 500px;
	position: relative;
	display: flex;
	flex-direction: row;
	background-color: ${(props) => (props.maptheme === 'light' ? '' : '#242424')};
	/* scroll-snap-stop: always;
	scroll-snap-align: start; */
`;

const Trigger = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 3px;
	width: 3px;
	pointer-events: none;
`;

type ChapterProps = {
	customMap?: React.FunctionComponent;
	data: {
		metadata: MetaData;
		sources: { name: string; url: string }[];
		pages: PageTypes[];
		customFeatures?: () => void;
		customFeaturesPerPage?: () => any;
		customMapDOM?: (
			arg: CustomFeaturesArgs
		) => HTMLElement | ReactElement | Component;
		customChapterDOM?: HTMLElement | ReactElement | Component;
	};
};

const Chapter = ({
	customMap,
	data: {
		metadata,
		sources,
		customFeatures,
		customFeaturesPerPage,
		customMapDOM,
		customChapterDOM,
		pages,
	},
}: ChapterProps) => {
	const [currentPage, setCurrentPage] = useState(0);
	const { dispatch } = useContext(Context);
	const pageRefs = {};

	return useMemo(
		() => (
			<Wrapper
				maptheme={metadata.theme}
				id={metadata.name}
				screensTall={pages.length > 1 ? pages.length : 1}
			>
				<SideCar floating={metadata.fullWidthMap}>
					{pages.map((page, index) => {
						return (
							<Page
								floating={metadata.fullWidthMap}
								ref={(ref) => (pageRefs[index] = ref)}
								key={`${metadata.name}-page-${index}`}
							>
								<PageContent
									theme={metadata.theme}
									floating={metadata.fullWidthMap}
								>
									<PageTitle>{page.title}</PageTitle>
									<PageText floating={metadata.fullWidthMap}>
										{page.content}
									</PageText>
								</PageContent>
								<TrackVisibility
									onChange={(isVisible) => {
										if (isVisible) {
											dispatch({
												type: 'SET_NAV',
												payload: metadata.name,
											});
											setCurrentPage(index);
										}
									}}
								>
									{({ isVisible }) => {
										return <Trigger />;
									}}
								</TrackVisibility>
							</Page>
						);
					})}
				</SideCar>

				<TrackVisibility partialVisibility>
					{({ isVisible }) => (
						<MapContainer
							fullWidth={metadata.fullWidthMap}
							className={`arcgis-map-${metadata.theme}`}
						>
							{isVisible && (
								<MapTemplate
									mapState={pages[currentPage].mapState}
									customFeatures={customFeatures}
									customFeaturesPerPage={customFeaturesPerPage}
									customMapDOM={customMapDOM}
									metadata={metadata}
									sources={sources}
									pageRefs={pageRefs}
									currentPage={currentPage}
								/>
							)}
						</MapContainer>
					)}
				</TrackVisibility>
				{customChapterDOM && customChapterDOM}
			</Wrapper>
		),
		[currentPage]
	);
};

export default Chapter;
