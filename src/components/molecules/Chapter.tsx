import React, { useState, cloneElement } from 'react';
import type { ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';
import TrackVisibility from 'react-on-screen';
import { MapContainer, SideCar, Page, PageTitle, PageText } from '../atoms';
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
	map: React.FunctionComponent;
	fullWidthMap: boolean;
	data: {
		metadata: MetaData;
		pages: PageTypes[];
		customFeatures?: () => void;
	};
};

const Chapter = ({
	map,
	fullWidthMap,
	data: { metadata, customFeatures, pages },
}: ChapterProps) => {
	const [currentPage, setCurrentPage] = useState(0);
	const Map: FunctionComponent<MapProps> = map;

	return (
		<Wrapper>
			<SideCar>
				{pages.map((page, index) => {
					return (
						<Page key={`${metadata.name}-page-${index}`}>
							<TrackVisibility>
								{({ isVisible }) => {
									isVisible && setCurrentPage(index);
									return <PageTitle>{page.title}</PageTitle>;
								}}
							</TrackVisibility>
							<PageText>{page.content}</PageText>
						</Page>
					);
				})}
			</SideCar>
			<MapContainer fullWidth={fullWidthMap}>
				<TrackVisibility className="visibility-tracker" partialVisibility>
					{({ isVisible }) =>
						isVisible && (
							<Map
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
