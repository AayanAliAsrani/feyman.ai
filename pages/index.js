import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Plagiarism Free Essay Writer</h1>
          </div>
          <div className="header-subtitle">
            <h2>Enter the subject of your essay along with word count requirement and format (MLA, APA, Chicago)</h2>
          </div>
        </div>
        <div className="prompt-container">
        <textarea placeholder="start typing here" className="prompt-box" />
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
