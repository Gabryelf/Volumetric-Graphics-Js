import * as THREE from 'three';
import {Pane} from 'tweakpane';

export class PaneConstructor{
    constructor(){
        this.pane = new Pane();
    }

    createAll(obj){
        this._createPositionPane(obj);
        this._createScalePane(obj);
        this._createRotationPane(obj);
        this._createTextureOptions(obj);
        this._createMaterialOptions(obj);
        console.log(obj);
    }

    addPaneFolder(title, expand){
        const folder = this.pane.addFolder({
            title: `${title}`,
            expanded: expand,
        });
        return folder;
    }

    _createScalePane(obj){
        const folderPane = this.addPaneFolder(`${obj.name} scale`, false);
        folderPane.addBinding(obj.scale, 'x', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'Scale X'
        });
        folderPane.addBinding(obj.scale, 'y', {
            min: 0,
            max: 3,
            step: 0.01,
            label: 'Scale Y'
        });
        folderPane.addBinding(obj.scale, 'z', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'Scale Z'
        });
    }

    _createPositionPane(obj){
        const folderPane = this.addPaneFolder(`${obj.name} position`, false);
        folderPane.addBinding(obj.position, 'x', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'Pos X'
        });
        folderPane.addBinding(obj.position, 'y', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'Pos Y'
        });
        folderPane.addBinding(obj.position, 'z', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'Pos Z'
        });
    }

    _createRotationPane(obj){
        const folderPane = this.addPaneFolder(`${obj.name} rotation`, false);
        folderPane.addBinding(obj.rotation, 'x', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'Rotate X'
        });
        folderPane.addBinding(obj.rotation, 'y', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'Rotate Y'
        });
        folderPane.addBinding(obj.rotation, 'z', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'Rotate Z'
        });
    }

    _createTextureOptions(obj){
        const folderPane = this.addPaneFolder(`${obj.name} texture options`, false);
        //offset
        folderPane.addBinding(obj.material.map.offset, 'x', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'map offset x'
        });
        folderPane.addBinding(obj.material.map.offset, 'y', {
            min: 0,
            max: 10,
            step: 0.1,
            label: 'map offset y'
        });
    }

    _createMaterialOptions(obj){
        const folderPane = this.addPaneFolder(`${obj.name} material options`, false);
        folderPane.addBinding(obj.material, 'metalness', {
            min: 0,
            max: 1,
            step: 0.01,
            label: 'metalness'
        });
        folderPane.addBinding(obj.material, 'roughness', {
            min: 0,
            max: 1,
            step: 0.01,
            label: 'roughness'
        });
        folderPane.addBinding(obj.material, 'displacementScale', {
            min: 0,
            max: 1,
            step: 0.01,
            label: 'height'
        });
    }
}