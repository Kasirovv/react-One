import './App.css';
import logo from './assets/logo.png';
import background from './assets/back.png';
import user from './assets/user.png';
import like from './assets/like.png';
import coco from "./assets/coco.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import background2 from './assets/back2.png';
import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg4.png";
import bg3 from "./assets/bg-3.png";
import gallery from './assets/gallery.png';
import subscribelist from './assets/subscribelist.png';

function App() {
  return (
      <div className="w-[100%]">
          <header className='w-[100%] h-[100vh] bg-cover'  style={{ backgroundImage: `url(${background})` }}>
              <nav className='w-[100%] h-[10vh] flex justify-around items-center'>
                    <span className='flex space-x-[15px] text-white'>
                      <a href="">Контрагентам</a>
                      <a href="">Дизайнерам</a>
                      <a href="">Вакансии</a>
                    </span>
                    <span>
                        <img src={logo} alt="" />                      
                    </span>
                    <span className='flex space-x-[15px] text-white'>
                      <a href="">Поиск</a>
                      <a href="">Вход/Регистрация</a>
                      <a href=""><img src={user} /></a>
                      <a href=""><img src={like} /></a>
                    </span>
              </nav>
              <section className='w-[100%] h-[80vh]  flex flex-col justify-end items-center pb-[10vh] space-y-[20px]'>
                    <h1 className='text-white text-[30px]'>Долго, дорого, богато!</h1>
                    <button className='w-[200px] h-[5.5vh] border-[1px] text-white'>
                        каталог изделий 
                    </button>
              </section>
              <section className='w-[100%] h-[10vh] border-t-[1px] flex items-center space-x-[20px] justify-center'> 
                <span className='border-r-[1px] h-[8vh]'>                  
                        <img src={coco} />
                </span>
                <span className='border-r-[1px] h-[8vh]'>                  
                        <img src={coco} />
                </span>
                <span className='border-r-[1px] h-[8vh]'>                  
                        <img src={coco} />
                </span>
                <span className='border-r-[1px] h-[8vh]'>                  
                        <img src={coco} />
                </span>
                <span className='border-r-[1px] h-[8vh]'>                  
                        <img src={coco} />
                </span>
                <span className='border-r-[1px] h-[8vh]'>                  
                        <img src={coco} />
                </span>
              </section>
          </header>
          <main className='w-100%'>
              
              <section className='w-[100%] h-[15vh] text-center flex flex-col justify-center'>
                        <p>K мероприятиям</p>
                  <h1 className='text-[30px]'>Настоящая красота здесь!</h1>
              </section>

            <section className='w-[100%] h-[20vh]  flex justify-center items-center space-x-7'>
                <button className='bg-[#333333] w-[150px] h-[7vh] text-white'>
                Свадьба
                </button>
                <button className='border-[1px] border-[#333333] w-[150px] h-[7vh]'>
                МУЖУ
                </button>
                <button className='border-[1px] border-[#333333] w-[150px] h-[7vh]'>
                жене
                </button>
                <button className='border-[1px] border-[#333333] w-[150px] h-[7vh]'>
                партнеру
                </button>
                <button className='border-[1px] border-[#333333] w-[150px] h-[7vh]'>
                коллекции
                </button>
                <button className='border-[1px] border-[#333333] w-[150px] h-[7vh]'>
                редкость
                </button>
            </section>

            <section className='w-[100%] h-[80vh] flex flex-col justify-center items-center '>
            <div className='w-[80%] flex space-x-[20px] justify-center'> 
                <div className='w-[250px] h-[200px] bg-cover flex items-end justify-center text-white text-[25px]' style={{ backgroundImage: `url(${img1})` }}>
                    <p>Кольца</p>
                </div>

                <div className='w-[250px] h-[200px] bg-cover flex items-end justify-center text-white text-[25px]' style={{ backgroundImage: `url(${img2})` }}>
                    <p>серьги</p>
                </div>

                <div className='w-[250px] h-[200px] bg-cover flex items-end justify-center text-white text-[25px]' style={{ backgroundImage: `url(${img3})` }}>
                    <p>подвески</p>
                </div>
            </div>
            <div className='w-[80%] flex space-x-[20px] mt-[20px] justify-center'>
                <div className='w-[250px] h-[200px] bg-cover flex items-end justify-center text-white text-[25px]' style={{ backgroundImage: `url(${img4})` }}>
                    <p>запонки</p>
                </div>

                <div className='w-[250px] h-[200px] bg-cover flex items-end justify-center text-white text-[25px]' style={{ backgroundImage: `url(${img5})` }}>
                    <p>браслеты</p>
                </div>

                <div className='w-[250px] h-[200px] bg-cover flex items-end justify-center text-white text-[25px]' style={{ backgroundImage: `url(${img6})` }}>
                    <p>часы</p>
                </div>
            </div>
            </section>

            <section className='w-[100%] h-[50vh] grid items-center justify-center text-center text-white'style={{ backgroundImage: `url(${background2})` }} >
                  <p>Не знаете, что выбрать?</p>
                  <h1>Посетите наши салоны в Москве</h1>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque <br />
                  egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec <br /> 
                  pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices <br />
                  imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.
                  </p>
                  <button className='w-[200px] h-[6vh] text-black bg-[white] ml-[30vh]'>
                  наши салоны
                  </button>
            </section>  

            <section className='w-[100%] h-[100vh] text-center'>
                <p className='mt-[20px]'>Полезные статьи</p>
                <h1 className='text-[20px] font-semibold'>Лучшие советы по подбору дорогих подарков</h1>
                <div className='w-[100%] h-[80vh] flex items-center justify-center space-x-[20px]'>
                    <div className='w-[350px] h-[370px] border-[2px] flex items-end justify-center' style={{ backgroundImage: `url(${bg1})` }}>
                        <p className='text-white'> 
                        Как выбрать <br />
                        часы для своей <br />
                        будущей жены
                        </p>
                    </div>
                    <div className='w-[350px] h-[370px] border-[2px] flex items-end justify-center' style={{ backgroundImage: `url(${bg2})` }}>
                        <p className='text-white'> 
                        Запонки для мужа: <br />
                        7 ключевых правил <br />
                        покупки аксессуара
                        </p>
                    </div>
                    <div className='w-[350px] h-[370px] border-[2px] flex items-end justify-center' style={{ backgroundImage: `url(${bg3})` }}>
                        <p className='text-white'> 
                            Как выбрать <br />
                            обручальные кольца <br />
                            молодоженам
                        </p>
                    </div>
                </div>  
                <button className='w-[250px] h-[5vh] text-white bg-[#333333]'>
                читать наш блог
                </button>
            </section>

            <section className='w-[100%] h-[80vh] text-center flex flex-col justify-center items-center'>
                <p>#ojjo_jewerly</p>
                <h1 className='font-semibold text-[25px]'>Мы в социальных сетях</h1>
                <div className='w-[50%] h-[50vh] flex justify-center'>
                    <img src={gallery} alt="" />
                </div>
            </section>

            <section className='w-[100%] h-[50vh]' style={{ backgroundImage: `url(${background2})` }}>
                <div className='w-[100%] h-[25vh]  text-white flex flex-col justify-center items-center text-center'>
                      <p className='tracking-[3px]'>Полезные советы и персональный предложения</p> 
                      <h1 className='text-[30px]'>Эксклюзивная рассылка</h1>
                </div>
                <div className='w-[100%] h-[25vh] flex items-center justify-evenly '>
                      <div className="div">
                        <img src={subscribelist}  />
                      </div>
                      <div className='w-[400px] h-[10vh] flex items-center justify-center bg-white '>
                              <input type="text" placeholder='Ваш e-mail'  className='bg-none border-[1px] h-[5vh]'/> 
                              <button className='text-white w-[150px] h-[5vh] bg-[#333333]'>отправить</button>
                      </div>
                </div>
            </section>
          </main>

          <footer className='w-[100%] h-[50vh] flex items-center justify-evenly'>
             
              <section className='w-[300px]'>
                <h1>Полезные ссылки</h1>
                <hr />
                <a href="">Доставка</a> <br />
                <a href="">Оплата </a> <br />
                <a href="">Акции </a> <br />
                <a href="">Политика конфиденциальности</a> <br />
              </section>

              <section className='w-[300px]'>
                <h1>оплата</h1>
                <hr />
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ullamcorper <br /> justo, nec, pellentesque.
              </section>

              <section className='w-[300px]'>
                <h1>контакты</h1>
                <hr />
                <a href="">8 (812) 234-56-55</a> <br />
                <a href="">8 (812) 234-56-55 </a> <br />
                <a href="">Акции </a> <br />
                <a href="">ojjo@ojjo.ru</a> <br />
              </section>

              <section className='w-[300px] space-y-[10px]'>
                <h1>социальные сети</h1>
                <hr />
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ullamcorper <br /> justo, nec, pellentesque.
              </section>

          </footer>
      </div>
  );
}

export default App;
