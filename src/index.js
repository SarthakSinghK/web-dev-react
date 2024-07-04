import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// function Greeting() {
//   return <h1>this is the greetings to you from me </h1>;
// }
function Booklist() {
  return (
    <section className="booklist">
      <Book Pictu="https://media.sf-converter.com/get?__sig=9yupIpqYzxMX8rQiaLhYfA&__expires=1720036520&uri=https%3A%2F%2Fscontent-gig4-2.cdninstagram.com%2Fv%2Ft39.30808-6%2F449239620_18304029598094812_1647596188909080754_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08%26_nc_ht%3Dscontent-gig4-2.cdninstagram.com%26_nc_cat%3D1%26_nc_ohc%3Di7hZg2J2C10Q7kNvgF7Fwfp%26edm%3DAP_V10EAAAAA%26ccb%3D7-5%26oh%3D00_AYAjBdgLt4hN1DJGGnyC8x5-uJqXYODyuGhpVFz0m62AGA%26oe%3D66898658%26_nc_sid%3D2999b8" />
      <Book Pictu="https://media.sf-converter.com/get?__sig=VsiI2ulyxT-Utbe1gDfzPg&__expires=1720036520&uri=https%3A%2F%2Fscontent-gig4-2.cdninstagram.com%2Fv%2Ft39.30808-6%2F449241952_18304029607094812_815000338800571495_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08%26_nc_ht%3Dscontent-gig4-2.cdninstagram.com%26_nc_cat%3D1%26_nc_ohc%3D10tU4QExKSwQ7kNvgH52LoO%26edm%3DAP_V10EAAAAA%26ccb%3D7-5%26oh%3D00_AYAFdtp7VqsA-Cj4yMDiZB3UuIgMKn1orSqzGjEhXaAD5Q%26oe%3D66897A06%26_nc_sid%3D2999b8" />
      <Book Pictu="https://media.sf-converter.com/get?__sig=2S5QXdc7V_ZgAOgtI81ygQ&__expires=1720036520&uri=https%3A%2F%2Fscontent-gig4-2.cdninstagram.com%2Fv%2Ft39.30808-6%2F449209958_18304029616094812_4982865541400023527_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08%26_nc_ht%3Dscontent-gig4-2.cdninstagram.com%26_nc_cat%3D104%26_nc_ohc%3DYsnLt66evtUQ7kNvgGiT3xr%26edm%3DAP_V10EAAAAA%26ccb%3D7-5%26oh%3D00_AYDbYgrVwtsfOpMVlouRpQPYgzciue13J2W26g-c0jeNDA%26oe%3D668997CE%26_nc_sid%3D2999b8" />
      <Book Pictu="https://media.sf-converter.com/get?__sig=HRTKQ3nIM_E6rUZIRHae7A&__expires=1720036520&uri=https%3A%2F%2Fscontent-gig4-2.cdninstagram.com%2Fv%2Ft39.30808-6%2F449239585_18304029625094812_379629936782840349_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08%26_nc_ht%3Dscontent-gig4-2.cdninstagram.com%26_nc_cat%3D104%26_nc_ohc%3DxB4E3GEsxaUQ7kNvgG4lBky%26edm%3DAP_V10EAAAAA%26ccb%3D7-5%26oh%3D00_AYBa0U6YQKs5xvY2kh6OqxG4h2fHzdKqUc0VwFlQYH1O6A%26oe%3D668960AC%26_nc_sid%3D2999b8" />
      <Book Pictu="https://media.sf-converter.com/get?__sig=f4I3ovRY-TaFGddrBBszkA&__expires=1720036520&uri=https%3A%2F%2Fscontent-gig4-2.cdninstagram.com%2Fv%2Ft39.30808-6%2F449452022_18304029634094812_9051521150220472745_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08%26_nc_ht%3Dscontent-gig4-2.cdninstagram.com%26_nc_cat%3D104%26_nc_ohc%3DY_yPXyzcJ50Q7kNvgGsNWPl%26edm%3DAP_V10EAAAAA%26ccb%3D7-5%26oh%3D00_AYDCxLSTZcZlIRaziir_UaiQM-gZUFJiJOWC5jhZUqUf0Q%26oe%3D66899342%26_nc_sid%3D2999b8" />
      <Book Pictu="https://media.sf-converter.com/get?__sig=p4ItmiUiFi2yyiaN2uUr7w&__expires=1720036520&uri=https%3A%2F%2Fscontent-gig4-2.cdninstagram.com%2Fv%2Ft39.30808-6%2F449362874_18304029643094812_2731352593794465247_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08%26_nc_ht%3Dscontent-gig4-2.cdninstagram.com%26_nc_cat%3D104%26_nc_ohc%3DPQAHQP_RngoQ7kNvgFRRwVQ%26edm%3DAP_V10EAAAAA%26ccb%3D7-5%26oh%3D00_AYDpk8N5SiTaYuLEj4119WWO8__gMsWHoJNIqWtlJRnP8A%26oe%3D668978FB%26_nc_sid%3D2999b8" />
    </section>
  );
}

const Book = (props) => {
  const title = "Atomic Habits";
  const author = "James clear";
  return (
    <article className="book">
      <img src={props.Pictu} alt="Atomic Habits" />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
