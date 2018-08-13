import 'bootstrap/dist/css/bootstrap.css'
import './main.scss'
import Marionette from 'backbone.marionette'
// import 'backbone.syphon'
// import 'backbone-computedfields'
import renderer from './react-renderer.jsx';

Marionette.View.setRenderer(renderer)
