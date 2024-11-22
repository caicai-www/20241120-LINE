import axios from 'axios'

(async () => {
  try {
    const { data } = await axios.get('https://data.taipei/api/v1/dataset/6afa114d-38a2-4e3c-9cfd-29d3bd26b65b?scope=resourceAquire')

    //  用filter 篩選
    for (let i = 0; data.result.results.length; i++) {
      console.log(data.result.results[i].a_name_ch)
    }
  } catch (error) {
    console.error(error)
  }
})()
// const datas of data.result.results[1].a_name_ch
// await event.reply(data.result.results[0].a_name_ch)
// (async () => {
//   try {
//     const { data } = await axios.get('https://wdaweb.github.io/')
//     const courses = []
//     $('#fe .card-title').each(function () {
//       courses.push($(this).text().trim())
//     })
//     console.log(courses)
//   } catch (error) {
//     console.log(error)
//   }
// })()
