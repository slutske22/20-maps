import './popupTemplate.scss';

export const popupTemplate = {
	content: `
      <div class="japan-popup">
         <div class="header">
            <h3>Stop {Order_of_torch_arrival}: {Prefectures_or_other_location}</h3>
            <h3>{Date}</h3>
         </div>
         <img src="{Flag}" />
      </div>
   `,
};
