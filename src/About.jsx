import React from 'react'

export const About = () => {
  return (
    <div className="container">
    <br />
    <div className="row">
      <div className=" text-center">
        <img className="images-profile"
          src="FOTO- Purnama Dileon Y.N.jpg" width="100px"alt=""/>
      </div>
      <div className="col text-left mt-2">
        Ohayou Mina-san<br /> Nama saya adalah <b>Purnama Dileon Yamora Nainggolan,</b> Jurusan yang saya jalani sekarang adalah <b>S1 Rekayasa Perangkat Lunak.</b><br /> Saya berkuliah di IT Telkom Purwokerto,
        <br /> Saya sekarang berada di akhir masa perkuliahan saya <br /> Mari saya tunjukkan apa isi website :  
          <li className='mt-3'>
            Main REST API Server : <a href="https://indonesia-public-static-api.vercel.app/api/heroes">see here</a>
          </li>
          <li>
            Using Framework With React JS and Bootstrap 4
          </li>
        <div className="my-3">
          You can download this project  <a target="_blank" href="">here</a>
        </div>
        Thanks!
      </div>
    </div>
  </div>
  )
}
