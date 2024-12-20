import {React,useState} from 'react';
import './App.css'; 
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';

const events = [
  {
    title: 'Hakuna Matata | 2024',
    description: "In life\'s dance, let joy compose the rhythm, impulsiveness conduct the beat, and carefree moments choreograph a graceful masterpiece. Embrace the happiness of the unrehearsed, crafting a symphony of spontaneity on the canvas of existence.Embark on a captivating odyssey into the enchanting realm of '\Hakuna Matata,\' where each syllable orchestrates a symphony of carefree living. Journey through linguistic origins and unravel the profound philosophical underpinnings, discovering how this timeless mantra has evolved into a universal symbol of positivity. Delight in the psychological dimensions of embracing a worry-free mindset, skillfully navigating life's ebbs and flows. This celebration of the symphony of existence invites you to weave 'Hakuna Matata' into daily life, transforming each moment into a harmonious note. Immerse in the vibrant spirit, where joy and wisdom converge, illuminating a path adorned with carefree serenity.TEDxNITKSurathkal brings you the latest edition of our Ted event, themed Hakuna Matata. Join us as our speakers widen our appreciation of our culture and discuss how our past continues to thrive in the world today.",
  },
  {
    title: 'Attention Trap | 2021',
    description: 'writing the event task',
  },
  {
    title: 'Is Data the New Oil? | 2021',
    description: 'writing the event task',
  },
  {
    title: 'Pause to Play | 2021',
    description: 'writing the event task',
  },
  {
    title: 'Trailblazer | 2020',
    description: 'writing the event task',
  },
  {
    title: 'Aatmanirbhar Bharat | 2020',
    description: 'writing the event task',
  },
  {
    title: 'Mirrors and Windows | 2020',
    description: 'writing the event task',
  },
  {
    title: 'Scintillate | 2019',
    description: 'writing the event task',
  },
  {
    title: 'Perspectives | 2018',
    description: 'writing the event task',
  },
  {
    title: 'Ripples | 2016',
    description: 'writing the event task',
  },
  {
    title: 'Teasing Every Dimension | 2012',
    description: 'writing the event task',
  },
  {
    title: 'Ideas Worth Inspiring | 2011',
    description: 'writing the event task',
  },
];

const ArchivesPage = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }

  

  return (
    <div>
    <Navbar/>
    <Banner />
    <div className="archive-page">
      <div className='accordion'>
        {events.map((item,i) =>(
          <div className='item'>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>{selected === i ? '-':'+'}</span>
            </div>
            <div className={selected === i ? 'desc show':'desc'}>{item.description}</div>
          </div>
        ))

        }
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ArchivesPage;
