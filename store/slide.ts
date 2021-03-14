import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'slide',
  stateFactory: true,
  namespaced: true,
})
export default class Slide extends VuexModule {
  public index: number = 1

  @Mutation
  public goto(i: number) {
    this.index = i
  }
}
