import React, { useState } from 'react';

const Home = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
    const borrarTarea = (indice) => {
        const tareasQnoTienenEsteIndice = array.filter((item, i) => i != indice)
        setArray(tareasQnoTienenEsteIndice)
    }


    const addText = (event) => {
        event.preventDefault()
        if (text.trim() === "") return;
        setArray(prev => [...prev, text]);
        setText("");
    };

    return (
        <div className="d-flex justify-content-center text-center">
            <div className='w-40'>

                <h1 className="text-center mt-5">¿Qué vamos hacer hoy?</h1>

                <form onSubmit={addText} style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    padding: '0.5rem'
                }}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Nueva tarea..."
                        style={{
                            flex: 1,
                            padding: '0.75rem 1rem',
                            border: '2px solid #ddd',
                            borderRadius: '10px',
                            fontSize: '1rem',
                            height: '50px'
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: 'linear-gradient(135deg, #5470f0 0%, #53f0d3 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            height: '50px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 5px 15px rgba(64, 111, 147, 0.51)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                        }}
                    >
                        +
                    </button>
                </form>

                <div className="mt-4">
                    {array.map((item, i) => (
                        <div key={i} className="tarea d-flex justify-content-between mb-2 p-2">
                            <span>{item}</span>
                            <button
                                onClick={() => {
                                    borrarTarea(i)
                                }}
                                className="btn btn-info btn-sm"
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Home;
