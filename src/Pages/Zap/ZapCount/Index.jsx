import './style.css';

export default function ZapCount({totalQuests, playQuest}){
    return(
        <footer className='counter'>
            <h2>{playQuest}/{totalQuests} CONCLUÍDOS</h2>
        </footer>
    )
}