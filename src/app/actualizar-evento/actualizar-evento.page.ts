import { Component, OnInit } from '@angular/core'
import { ApicrudService } from 'src/app/services/apicrud.service'
import { Evento, EventosM } from 'src/interfaces/eventos'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
	selector: 'app-actualizar-evento',
	templateUrl: './actualizar-evento.page.html',
	styleUrls: ['./actualizar-evento.page.scss'],
})
export class ActualizarEventoPage implements OnInit {
	eventos: Evento[] = [] // Lista de eventos cargados
	evento: Evento | null = null
	creandoEvento: boolean = false // Estado para controlar creación de nuevo evento

	imagen: string = 'assets/default-event-image.png'

	event: EventosM = {
		imagen: '',
		nombreEvento: '',
		fecha: '',
		lugar: '',
		descripcion: '',
	}

	constructor(
		private apicrud: ApicrudService,
		private alertcontroller: AlertController,
		private router: Router
	) {}

	ngOnInit() {
		this.loadEventos() // Cargar eventos al inicializar
	}

	// Cargar los eventos desde el archivo JSON (o API)
	loadEventos() {
		this.apicrud.getEventos().subscribe((data) => {
			this.eventos = data
		})
	}

	// Método para seleccionar un evento y cargarlo al formulario de edición
	selectEvento(evento: Evento) {
		this.evento = evento
		this.creandoEvento = false
		this.event = {
			id: evento.id,
			imagen: evento.imagen || this.imagen,
			nombreEvento: evento.nombreEvento,
			fecha: evento.fecha,
			lugar: evento.lugar,
			descripcion: evento.descripcion,
		}
	}

	// Método para iniciar la creación de un nuevo evento
	nuevoEvento() {
		this.creandoEvento = true
		this.evento = null
		this.event = {
			id: crypto.randomUUID(),
			imagen: '',
			nombreEvento: '',
			fecha: '',
			lugar: '',
			descripcion: '',
		}
	}

	// Método para guardar un nuevo evento
	guardarNuevoEvento() {
		this.apicrud.postEventos(this.event).subscribe(() => {
			this.creandoEvento = false
			this.loadEventos() // Recargar la lista de eventos
			this.mensajeNuevo()
		})
	}

	// Método para eliminar un evento
	deleteEvento() {
		if (this.evento) {
			this.apicrud.deleteEvento(this.evento).subscribe(() => {
				this.deleteMensaje()
			})
		}
	}

	// Método para actualizar un evento existente
	actualizarEvento() {
		if (this.event) {
			this.apicrud.putEventos(this.event).subscribe(() => {
				this.mensaje()
			})
		}
	}

	// Manejar la selección de una imagen
	onFileSelected(event: Event) {
		const target = event.target as HTMLInputElement

		if (target.files && target.files.length > 0) {
			const file = target.files[0]

			const reader = new FileReader()
			reader.onload = (e: any) => {
				this.imagen = e.target.result
				if (this.creandoEvento) {
					this.event.imagen = this.imagen
				} else if (this.evento) {
					this.evento.imagen = this.imagen
				}
			}

			reader.readAsDataURL(file)
		} else {
			console.warn('No se seleccionó ningún archivo.')
		}
	}

	// Mostrar mensaje de evento actualizado
	async mensaje() {
		const alert = await this.alertcontroller.create({
			header: 'Evento Actualizado',
			message: 'El evento ha sido actualizado exitosamente',
			buttons: [
				{
					text: 'OK',
					role: 'confirm',
					handler: () => {
						this.router.navigate(['/iniestudiante'])
					},
				},
			],
		})

		await alert.present()
	}

	// Mostrar mensaje de evento eliminado
	async deleteMensaje() {
		const alert = await this.alertcontroller.create({
			header: 'Evento Eliminado',
			message: 'El evento ha sido eliminado exitosamente',
			buttons: [
				{
					text: 'OK',
					role: 'confirm',
					handler: () => {
						this.router.navigate(['/iniestudiante'])
					},
				},
			],
		})

		await alert.present()
	}

	// Mostrar mensaje de evento creado
	async mensajeNuevo() {
		const alert = await this.alertcontroller.create({
			header: 'Evento Creado',
			message: 'El nuevo evento ha sido creado exitosamente',
			buttons: [
				{
					text: 'OK',
					role: 'confirm',
					handler: () => {
						this.router.navigate(['/iniestudiante'])
					},
				},
			],
		})

		await alert.present()
	}
}
