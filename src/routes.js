import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'
import SplitView from './components/SplitView/SplitView.vue'
import Movement from './components/Movements/Movement.vue'
import StockDetail from './components/StockDetail/StockDetail.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks },
  { path: '/split', component: SplitView },
  { path: '/movement', component: Movement },
  { path: '/stock/:id', component: StockDetail },
]