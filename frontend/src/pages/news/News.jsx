import React from 'react'
import './News.css';

const News = () => {
  return (
    <>
      <section className="light m-3">
  <div className="py-4">
    <h1 className="h1 text-center" id="pageHeaderTitle">News</h1>
    <article className="postcard dark blue">
      <a className="postcard__img_link" href="#">
        <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
      </a>
      <div className="postcard__text">
        <h1 className="postcard__title blue"><a href="#">Podcast Title</a></h1>
        <div className="postcard__subtitle small">
          <time dateTime="2020-05-25 12:00:00">
            <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
          </time>
        </div>
        <div className="postcard__bar" />
        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
        <ul className="postcard__tagbox">
          <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
          <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
          <li className="tag__item play blue">
            <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
          </li>
        </ul>
      </div>
    </article>
    <article className="postcard dark red">
      <a className="postcard__img_link" href="#">
        <img className="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" /> 
      </a>
      <div className="postcard__text">
        <h1 className="postcard__title red"><a href="#">Podcast Title</a></h1>
        <div className="postcard__subtitle small">
          <time dateTime="2020-05-25 12:00:00">
            <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
          </time>
        </div>
        <div className="postcard__bar" />
        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
        <ul className="postcard__tagbox">
          <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
          <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
          <li className="tag__item play red">
            <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
          </li>
        </ul>
      </div>
    </article>
    <article className="postcard dark green">
      <a className="postcard__img_link" href="#">
        <img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
      </a>
      <div className="postcard__text">
        <h1 className="postcard__title green"><a href="#">Podcast Title</a></h1>
        <div className="postcard__subtitle small">
          <time dateTime="2020-05-25 12:00:00">
            <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
          </time>
        </div>
        <div className="postcard__bar" />
        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
        <ul className="postcard__tagbox">
          <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
          <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
          <li className="tag__item play green">
            <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
          </li>
        </ul>
      </div>
    </article>
    <article className="postcard dark yellow">
      <a className="postcard__img_link" href="#">
        <img className="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" />
      </a>
      <div className="postcard__text">
        <h1 className="postcard__title yellow"><a href="#">Podcast Title</a></h1>
        <div className="postcard__subtitle small">
          <time dateTime="2020-05-25 12:00:00">
            <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
          </time>
        </div>
        <div className="postcard__bar" />
        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
        <ul className="postcard__tagbox">
          <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
          <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
          <li className="tag__item play yellow">
            <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
          </li>
        </ul>
      </div>
    </article>
  </div>
</section>





    </>
  )
}

export default News