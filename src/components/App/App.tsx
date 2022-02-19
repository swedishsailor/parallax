import Hero from '../Hero/Hero';
import Middle from '../Middle/Middle';
import './App.scss';
import BlankSpace from '../BlankSpace/BlankSpace';
import Down from '../Down/Down';

function App() {
  const mouseScroll = (e: any): void => {
    const value: number = e.nativeEvent.wheelDelta;
    const dest: any = document.querySelector('.Hero');
    const arr: string[] = Array.from(dest.style.top)
    let string: any = '';
    // Get the latest pos and remove 'px' from it
    for (let i = 0; i < arr.length - 2; i++) {
      string += arr[i];
    }
    if (string === '') string = 350;
    dest.style.top = parseInt(string) + value * 0.2 + 'px';
  }
  return (
    <div className="App" onWheel={e => mouseScroll(e)}>
      <BlankSpace header={"Hello"}></BlankSpace>
      <Hero bigCloudImage={'https://i.postimg.cc/qqppXG0z/Pclouds.png'} smallCloudsImage={'https://i.postimg.cc/rFnqxWHw/Pclouds2.png'}></Hero>
      <Middle></Middle>
      <Down></Down>
    </div>
  );
}

export default App;