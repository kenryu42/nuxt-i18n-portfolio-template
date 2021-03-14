import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import slide from '~/store/slide'

let slideStore: slide

function initialiseStores(store: Store<any>): void {
  slideStore = getModule(slide, store)
}

export { initialiseStores, slideStore }
