import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Innernav = () => {
  return (
    <ul class="nav justify-content-center nav-tabs bg-dark-subtle inner">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Person</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Topics</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Entertainment</a>
    </li>
  </ul>
  )
}
