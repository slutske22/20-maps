import React from 'react';
import { PageContent, PageText, PageTitle, RefLink } from '../../atoms';

export default (
	<PageContent
		floating={true}
		theme={'dark'}
		width="380px"
		padding="1em"
		margin="none"
	>
		<PageTitle>Mars!</PageTitle>
		<PageText>
			As much as you may want to abandon Earth altogether for more pristine
			pastures, we're still not ready to visit our red neighbor. But the
			Curiosity Rover is still up there, making discoveries. You can see
			mission updates{' '}
			<RefLink
				linkTitle="Mars Curiosity Rover, Mission Updates, NASA"
				link="https://mars.nasa.gov/msl/mission-updates/"
				theme="dark"
			>
				here
			</RefLink>
			.
			<br />
			<br />
			Click the thumbnails to see Curiosity's 2020 discoveries.
		</PageText>
	</PageContent>
);
