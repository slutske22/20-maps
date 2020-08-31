export const popupTemplate = {
   title: "{Location}",
   content: `
      <div class="protests-popup">
			<p>Attendees: {Attendees}</p>
         <p>Date: {Date}</p>
         <p>Tags: {Tags}</p>
      </div>`,
   fieldInfos: [
      {
         fieldName: "Attendees",
         format: {
            digitSeparator: true,
            places: 0
         }
      }
   ]
}

export default popupTemplate