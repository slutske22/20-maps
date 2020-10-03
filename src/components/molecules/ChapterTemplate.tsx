import React, { useState } from 'react';
import type { FunctionComponent } from 'react';
import styled from 'styled-components';
import TrackVisibility from 'react-on-screen';
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
};

const Wrapper = styled.div<WrapperProps>`
	width: 100%;
	height: ${(props) =>
		props.height || `${props.screensTall * 100}vh` || `auto`};
	min-height: 500px;
	position: relative;
	display: flex;
	flex-direction: row;
	border: 2px solid blue;
`;

type ChapterProps = {
	customMap?: React.FunctionComponent;
	data: {
		metadata: MetaData;
		pages: PageTypes[];
		customFeatures?: () => void;
	};
};

const Chapter = ({
	customMap,
	data: { metadata, customFeatures, pages },
}: ChapterProps) => {
	const [currentPage, setCurrentPage] = useState(0);
	const CustomMap: FunctionComponent<MapProps> = customMap || null;

	return (
		<Wrapper>
			<SideCar floating={metadata.fullWidthMap}>
				{pages.map((page, index) => {
					return (
						<Page key={`${metadata.name}-page-${index}`}>
							<PageContent>
								<TrackVisibility>
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
			<MapContainer
				fullWidth={metadata.fullWidthMap}
				className={`arcgis-map-${metadata.theme}`}
			>
				<TrackVisibility className="visibility-tracker" partialVisibility>
					{({ isVisible }) =>
						isVisible && (
							<MapTemplate
								mapState={pages[currentPage].mapState}
								customFeatures={customFeatures}
								metadata={metadata}
							/>
						)
					}
				</TrackVisibility>
			</MapContainer>
		</Wrapper>
	);
};

export default Chapter;
