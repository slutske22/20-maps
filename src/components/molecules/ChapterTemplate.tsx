import React, { useState, useContext, useMemo } from 'react';
import type { ReactElement, Component, FunctionComponent } from 'react';
import styled from 'styled-components';
import TrackVisibility from 'react-visibility-sensor';
import { Context } from '../../context';
import {
	MapContainer,
	SideCar,
	Page,
	PageContent,
	PageTitle,
	PageText,
} from '../atoms';
import MapTemplate from './MapTemplate';
import { PageTypes, MetaData, MapProps } from '../../types';

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
	background-color: ${(props) =>
		props.maptheme === 'light' ? '' : '#242424'};
	scroll-snap-stop: always;
	scroll-snap-align: start;
`;

type ChapterProps = {
	customMap?: React.FunctionComponent;
	data: {
		metadata: MetaData;
		pages: PageTypes[];
		customFeatures?: () => void;
		customDOM?: HTMLElement | ReactElement | Component;
	};
};

const Chapter = ({
	customMap,
	data: { metadata, customFeatures, customDOM, pages },
}: ChapterProps) => {
	const [currentPage, setCurrentPage] = useState(0);
	const { dispatch } = useContext(Context);
	const CustomMap: FunctionComponent<MapProps> = customMap || null;

	return useMemo(
		() => (
			<Wrapper maptheme={metadata.theme} id={metadata.name}>
				{console.log(`rendering ${metadata.name} chapter template`)}
				<SideCar floating={metadata.fullWidthMap}>
					{pages.map((page, index) => {
						return (
							<Page key={`${metadata.name}-page-${index}`}>
								<PageContent
									theme={metadata.theme}
									floating={metadata.fullWidthMap}
								>
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
											return <PageTitle>{page.title}</PageTitle>;
										}}
									</TrackVisibility>
									<PageText>{page.content}</PageText>
								</PageContent>
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
									customDOM={customDOM}
									metadata={metadata}
								/>
							)}
						</MapContainer>
					)}
				</TrackVisibility>
			</Wrapper>
		),
		[currentPage]
	);
};

export default Chapter;
