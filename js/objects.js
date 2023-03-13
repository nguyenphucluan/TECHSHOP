const objects1= [
    {
        id:1,
        class:"box",
        href:"#",
        textBtn:"khám phá ngay",
        span:"Ưu đãi",
        h3:"THU CŨ ĐỔI MỚI",
        p:" THU MÀN CŨ, ĐỔI MÀN MỚI Lên đời Hàng NEW 100% chỉ hơn 1 TRIỆU Nhận thu lại màn CŨ tất cả thương hiệu"
    },
    {
        id:2,
        class:"box second",
        href:"#",
        textBtn:"khám phá ngay",
        span:"Ưu đãi",
        h3:"THU CŨ ĐỔI MỚI",
        p:" THU MÀN CŨ, ĐỔI MÀN MỚI Lên đời Hàng NEW 100% chỉ hơn 1 TRIỆU Nhận thu lại màn CŨ tất cả thương hiệu"
    },
    {
        id:3,
        class:"box",
        href:"#",
        textBtn:"khám phá ngay",
        span:"Ưu đãi",
        h3:"THU CŨ ĐỔI MỚI",
        p:" THU MÀN CŨ, ĐỔI MÀN MỚI Lên đời Hàng NEW 100% chỉ hơn 1 TRIỆU Nhận thu lại màn CŨ tất cả thương hiệu"
    },
];
function sliderControl1(obj,id,style) {
    return (
        `<div key=${id} class="swiper-slide">
            <div class=${obj.class} style=${style}>
                <div class="content">
                    <span>${obj.span}</span>
                    <h3>${obj.h3}</h3>
                    <p>${obj.p}</p>
                    <a href=${obj.href} class="btn">${obj.textBtn}</a>
                </div>
            </div>
        </div>`)
    
}
var homeSlider = objects1.map(sliderControl1)
document.querySelector(".home .swiper-wrapper").innerHTML = homeSlider




