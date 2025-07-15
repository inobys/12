import { h } from 'preact';
import { renderDom } from 'lib/dom';
import preact from '../asset/preact.png';
import {PreprocessPage} from './preprocesspage'

let instance = new PreprocessPage();
instance.init();