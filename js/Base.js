AFRAME.registerComponent("base",{
    schema:{
        radius:{type:"number", default:1000},
        height:{type:"number", default:3}
    },

    init: function(){
        this.el.setAttribute("geometry",{
            primitive:"cylinder",
            radius:this.data.radius,
            height:this.data.height
        });
        this.el.setAttribute("material", {color:"#1769aa"})
    }

});