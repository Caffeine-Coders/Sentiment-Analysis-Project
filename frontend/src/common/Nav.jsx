import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import imgurl from "../videos/logo_eye.png"

export const Nav = () => {
return (
<nav class="navbar navbar-expand-lg bg-dark-subtle">
  <div class="container-fluid">
    <a class="navbar-brand eye" href="#"><img src = {imgurl} width="70px" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/Caffeine-Coders/Sentiment-Analysis-Project/blob/main/backend/personanalysis.ipynb">View Code</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">View Process</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
