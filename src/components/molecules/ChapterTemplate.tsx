import React, { useState } from 'react';
import type { ReactElement, Component } from 'react';
import type { FunctionComponent } from 'react';
import styled from 'styled-components';
// import TrackVisibility from 'react-on-screen';
import TrackVisibility from 'react-visibility-sensor';
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

const Wrapper = styled.div<WrapperProps>`
	width: 100%;
	height: ${(props) =>
		props.height || `${props.screensTall * 100}vh` || `auto`};
	min-height: 500px;
	position: relative;
	display: flex;
	flex-direction: row;
	background-color: ${(props) =>
		props.maptheme === 'light' ? '' : '#242424'};
	// border: 2px solid blue;
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
	const CustomMap: FunctionComponent<MapProps> = customMap || null;

	return (
		<Wrapper maptheme={metadata.theme}>
			<SideCar floating={metadata.fullWidthMap}>
				{pages.map((page, index) => {
					return (
						<Page key={`${metadata.name}-page-${index}`}>
							<PageContent
								theme={metadata.theme}
								floating={metadata.fullWidthMap}
							>
								<TrackVisibility
									onChange={(isVisible) =>
										isVisible &&
										console.log(
											`${metadata.name} page ${index} is visible`
										)
									}
								>
									{({ isVisible }) => {
										isVisible && setCurrentPage(index);
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
	);
};

export default Chapter;
