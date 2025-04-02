const Anons = () => {
	const allAlbums = [
		{
			imgSrc: '../../public/img/albom_dracondaz.jpg',
			nameAlbum: 'Альбом Dracondaz «Песни Фрайвура»',
			aLink: 'https://band.link/dracondaz',
		},
		{
			imgSrc: '../../public/img/albom_perezvoni-mne_deluxe.jpg',
			nameAlbum: 'Альбом «Перезвони мне +7 (999) 577-12-02»',
			aLink: 'https://orcd.co/perezvonimne',
		},
		{
			imgSrc: '../../public/img/albom_moi-deti-ne-budut-skuchat.jpg',
			nameAlbum: 'ЕР «Мои дети не будут скучать»',
			aLink: 'https://orcd.co/anacondaz',
		},
		{
			imgSrc: '../../public/img/albom_ya-tebya-nikogda.jpg',
			nameAlbum: 'Альбом «Я тебя никогда»',
			aLink: 'https://orcd.co/yatebyanikogda',
		},
		{
			imgSrc: '../../public/img/albom_vyhodi-za-menya.jpg',
			nameAlbum: 'Альбом «Выходи за меня»',
			aLink: 'https://orcd.co/vyhodizamenya',
		},
		{
			imgSrc: '../../public/img/albom_bayki-insaydera.jpg',
			nameAlbum: 'Альбом «Байки инсайдера»',
			aLink: 'https://orcd.co/bajkiinsajdera',
		},
		{
			imgSrc: '../../public/img/albom_bez-paniki.jpg',
			nameAlbum: 'Альбом «Без паники»',
			aLink: 'https://band.link/bezpaniki',
		},
		{
			imgSrc: '../../public/img/albom_deti-i-raduga.jpg',
			nameAlbum: 'Альбом «Дети и радуга»',
			aLink: 'https://orcd.co/detiiraduga',
		},
		{
			imgSrc: '../../public/img/albom_evolyuciya.jpg',
			nameAlbum: 'ЕР «Эволюция»',
			aLink: 'https://orcd.co/evolyuciya',
		},
		{
			imgSrc: '../../public/img/albom_smachnye-nishtyaki.jpg',
			nameAlbum: 'Альбом «Смачные ништяки»',
			aLink: 'https://orcd.co/smachnyenishtyaki',
		},
	]
	return (
		<div className='anonsWrapper'>
			<div className='anonsWrapper'>
				{allAlbums.map((album, index) => (
					<div className='anonsCards' key={index}>
						<img src={album.imgSrc} alt={album.nameAlbum} />
						<p>{album.nameAlbum}</p>
						<a href={album.aLink} target='_blank' rel='noopener noreferrer'>
							<img src='../../public/img/iconLink.svg' alt='Ссылка' />
						</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default Anons
