AFRAME.registerComponent("car-model",{
    schema:{
        modelRef:{type:"string", default:"assets/car/car.glb"}
    },

    init: function(){
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = {x:0, y:40, z:30};
        const rotation = {x:0, y:-100, z:0};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
    }

});
