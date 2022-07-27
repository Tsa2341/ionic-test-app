import {
	IonBadge,
	IonButton,
	IonCheckbox,
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonNote,
	IonPage,
	IonSearchbar,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { search, searchCircleOutline } from 'ionicons/icons';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/tailwindcss.variables.css';

const HomePage: React.FC = () => {
	const prefersDark = window.matchMedia('(prefers-color-scheme: light)');
	const [show, setShow] = useState(false);

	console.log(prefersDark.onchange);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonSearchbar enterkeyhint='search' searchIcon={search} title='Search' slot='start' />
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonList>
					<IonItem>
						<IonButton
							style={{ color: '--ion-color-tertiary', width: '100%' }}
							onClick={() => {
								setShow(!show);
							}}>
							Click me
						</IonButton>
					</IonItem>
					{show && (
						<IonItem>
							<IonContent>
								<div>
									The dark mode is <p className='text-lg text-[var(--ion-color-secondary)]'></p>
								</div>
							</IonContent>
						</IonItem>
					)}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
