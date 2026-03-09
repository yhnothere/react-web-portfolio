import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>

        <a
            href={ "https://yhnothere.github.io/simple-html-portfolio/"  }
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                zIndex: 10,
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: '#c3d0ff',
                color: '#1d1d1d',
                fontFamily: 'sans-serif',
                fontWeight: 700,
                fontSize: '0.875rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
            }}
        >
            View in 2D →
        </a>

        <Canvas
            className='r3f'
            camera={ {
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [ -3, 1.5, 4 ]
            } }
        >
            <App />
        </Canvas>

    </div>
)