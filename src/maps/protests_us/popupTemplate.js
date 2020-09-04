export const popupTemplate = {
   title: "{Location}",
   content: [
      {
         type: "fields",
         fieldInfos: [
            {
               fieldName: "Date",
            },
            {
               fieldName: "Location",
            },
            {
               fieldName: "Attendees",
               format: {
                  digitSeparator: true,
                  places: 0
               }
            },
            {
               fieldName: "Tags",
            },
            {
               fieldName: "Source",
            },
         ]
      }
   ],
}

export default popupTemplate