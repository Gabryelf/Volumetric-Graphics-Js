import * as THREE from 'three';

export class Settings{
    constructor(scene){
        this.scene = scene;
        this.grid = null;

    }

    createAllSettigs(){
        this._createMoreHelpers();
        //this._createMoreMesh();
    }

    _createMoreHelpers(){
        //this._createAxesHelper();
        this._createGridHelper();
        this._createFloorPlane();
    }

    _createMoreMesh(){
        this._createBaseCube();
        this._createBaseSphere();
        this._createCustomPhigure();
    }

    _createAxesHelper(){
        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);
    }

    _createBaseCube(){
        const geometry = new THREE.BoxGeometry(5,5,5);
        const material = new THREE.MeshStandardMaterial({color : 0x00FF7F,
            roughness : 0.9,
            metalness : 0.9,
            transparent: true,
            opacity: 0.8
        });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
    }

    _createBaseSphere(){
        const geometry = new THREE.SphereGeometry(2, 16, 16);
        const material = new THREE.MeshStandardMaterial({color : 0x7B68EE,
            roughness : 0.5,
            metalness : 0.5,
            transparent: true,
            opacity: 0.9
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = 8;
        this.scene.add(sphere);
    }

    _createCustomPhigure(){
        const geometry = new THREE.BufferGeometry();
        // create a simple square shape. We duplicate the top left and bottom right
        // vertices because each vertex needs to appear once per triangle.
        const vertices = new Float32Array( [
            -1.0, -1.0,  1.0, // v0
            1.0, -1.0,  1.0, // v1
            1.0,  1.0,  1.0, // v2
            1.0,  1.0,  1.0, // v3
            -1.0,  1.0,  1.0, // v4
            -1.0, -1.0,  1.0  // v5
        ] );
        // itemSize = 3 because there are 3 values (components) per vertex
        geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        const mesh = new THREE.Mesh( geometry, material );
        mesh.material.side = THREE.DoubleSide;
        this.grid.add(mesh);

    }

    _createGridHelper(){
        const gridHelper = new THREE.GridHelper(20, 20, 0x4488ff, 0x335588);
        gridHelper.position.y = -3;
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = 0.5;
        this.scene.add( gridHelper );
        this.grid = gridHelper;
    }


    _createFloorPlane(){
        const floorPlane = new THREE.Mesh(
            new THREE.PlaneGeometry(12, 12),
            new THREE.MeshStandardMaterial({
                color: 0x112233,
                roughness: 0.8,
                metalness: 0.2,
                transparent: true,
                opacity: 0.2,
                side: THREE.DoubleSide
            })
        );
        floorPlane.rotation.x = -Math.PI / 2;
        floorPlane.position.y = -2.9;
        floorPlane.receiveShadow = true; 
        this.scene.add(floorPlane);
    }
}