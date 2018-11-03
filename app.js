document.getElementById("img").addEventListener('mousemove', move => {
    const showImg = document.getElementById('showImage')
      showImg.style.backgroundPosition =
      `${move.clientX*100/move.target.offsetWidth}%
      ${move.clientY*100/move.target.offsetHeight}%`
      showImg.style.backgroundImage = `url(${move.currentTarget.src})`
})