import React, { useCallback, useEffect } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

const ToastFeedback = ({ isOpen, setIsOpen, hasErrors }) => {
	useEffect(() => {
		setTimeout(() => setIsOpen(false), 5000);
	}, [setIsOpen]);

	const ToastSuccess = useCallback(() => (
		<Toast style={{ position: 'fixed', bottom: '10%', right: '10%' }} color="primary" isOpen={isOpen}>
			<ToastHeader><FontAwesomeIcon icon={faCheck} color="#006D77"/> Registrazione completata</ToastHeader>
			<ToastBody>L'elemento è stato aggiunto con successo</ToastBody>
		</Toast>
	), [isOpen]);

	const ToastError = useCallback(() => (
		<Toast style={{ position: 'fixed', bottom: '10%', right: '10%' }} color="primary" isOpen={isOpen}>
			<ToastHeader><FontAwesomeIcon icon={faTimes} color="#D9534F"/> Si è verificato un errore durante la registrazione</ToastHeader>
			<ToastBody>L'elemento non è stato aggiunto</ToastBody>
		</Toast>
	), [isOpen]);

	return hasErrors ? <ToastError /> : <ToastSuccess />;
};

export default ToastFeedback;
