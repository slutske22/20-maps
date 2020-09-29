import React, { useState, cloneElement } from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { MapContainer, SideCar, Page, PageTitle, PageText } from '../atoms';
import { Pages, MetaData } from '../../types';

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
		pages: Pages[];
		metadata: MetaData;
	};
};

const Chapter = ({
	map,
	fullWidthMap,
	data: { pages, metadata },
}: ChapterProps) => {
	const [currentPage, setCurrentPage] = useState(0);
	const Map = map;

	return (
		<Wrapper>
			<SideCar>
				{pages.map((page, index) => {
					return (
						<Page key={`${metadata.name}-page-${index}`}>
							<PageTitle>{page.title}</PageTitle>
							<PageText>{page.content}</PageText>
						</Page>
					);
				})}
			</SideCar>
			<MapContainer fullWidth={fullWidthMap}>
				{cloneElement(map as null, {
					mapState: pages[currentPage].mapState,
					metadata,
				})}
			</MapContainer>
		</Wrapper>
	);
};

export default Chapter;
