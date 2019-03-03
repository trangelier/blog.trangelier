import React from 'react';
import styles from './Bio.module.css';
import { getGravatarURL } from '../utils/getGravatarURL';

function Bio(props) {
	let photoURL = getGravatarURL({
		email: 'tylerangelier@gmail.com',
		size: 56
	});

	return (
		<div
			className={`
      ${styles.Bio}
      ${props.className || ''}
    `}
		>
			<img src={photoURL} alt="Me" />
			<p>
				A simple blog that follows my life as a Full Stack Web
				Developer. You can expect to see posts about{' '}
				<a href="/tags/nodejs">NodeJS</a>, <a href="/tags/sql">SQL</a>,{' '}
				<a href="/tags/plsql">PL/SQL</a>, some{' '}
				<a href="/tags/systems">systems development</a>, and a little
				<a href="/tags/react"> React</a>. To see all my work, visit my{' '}
				<a href="https://github.com/trangelier/">GitHub Profile.</a>
			</p>
		</div>
	);
}

export default Bio;
