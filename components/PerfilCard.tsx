import React from 'react'

const PerfilCard = () => {
    return (
        <div >
            <figure className="md:flex bg-blue-600 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                    <div className="pt-6 text-center space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                            "O melhor lugar para treinar é na prática.Este é um projeto portfolio para descrever minhas habilidades no desenvolvimento de software."
                            </p>
                        </blockquote>
                        <figcaption className="font-bold">
                            <div className="text-white">
                                Leandro Felix
                            </div>
                            <div className="text-black ">
                                Engenharia de software, São Paulo.
                            </div>
                        </figcaption>
                    </div>
            </figure>
        </div>
    )
}

export default PerfilCard