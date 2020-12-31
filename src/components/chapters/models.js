import model01 from './arctic_ice/model.tsx';
import model02 from './beirut/model.tsx';
import model03 from './belarus/model.tsx';
import model04 from './covid_global/model.tsx';
import model05 from './covid_italy/model.tsx';
import model06 from './covid_pollution/model.tsx';
import model07 from './covid_us/model.tsx';
import model08 from './hurricanes/model.tsx';
import model09 from './iditarod/model.tsx';
import model10 from './japan_olympics/model.tsx';
import model11 from './locusts/model.tsx';
import model12 from './mars/model.tsx';
import model13 from './moon/model.tsx';
import model14 from './protests_us/model.tsx';
import model15 from './renewables/model.tsx';
import model16 from './shelter_animals/model.tsx';
import model17 from './vaccine/model.tsx';
import model18 from './voter_turnout_us/model.tsx';
import model19 from './wildfires_aus/model.tsx';
import model20 from './wildfires_california/model.tsx';

const allmodels = [
	model01,
	model02,
	model03,
	model04,
	model05,
	model06,
	model07,
	model08,
	model09,
	model10,
	model11,
	model12,
	model13,
	model14,
	model15,
	model16,
	model17,
	model18,
	model19,
	model20,
];

const dataSources = allmodels.map((m) => m.sources);
const flattened = [].concat.apply([], dataSources);

const linkList = flattened
	.map((source) => `- [${source.name}](${source.url})`)
	.join('\n');

console.log(linkList);
