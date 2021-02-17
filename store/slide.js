export const slide = () => ({
  index: 1,
})

export const mutations = {
  goto(slide, i) {
    slide.index = i
  },
}
