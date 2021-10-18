
import React from 'react'
import Row from './Row';
import request from './request';
import Bannar from './Bannar';
import Nav from './NavNetflix';
export default function NetFlix_Clone ()
{
	return (
		<div>
			<Nav />
			<Bannar />
			<Row large={true} title='NETFLIX ORIGINALS' url={request.originals} />
			<Row title='Trending Now' url={request.trending} />

			<Row title='Top Rated Movies' url={request.topRated} />
			<Row title='Comedy Movies' url={request.comedy} />
			<Row title='Rommance Movies' url={request.rommance} />
			<Row title='Horror Movies' url={request.horror} />
			<Row title='Documentories Movies' url={request.documentaries} />
		</div>
	);
}


//https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg