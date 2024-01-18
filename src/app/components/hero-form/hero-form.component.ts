import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Hero, Image } from '../../data/models/hero.model';
import { Router } from '@angular/router';
import { HeroService } from '../../data/services/heros/hero.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css',
})
export class HeroFormComponent {
  myForm!: FormGroup;
  submited: boolean = false;
  imagen: Image = {
    url: '',
  };
  hero: Hero = {
    id: '',
    name: '',
    description: '',
    descriptionlong: '',
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
    image: this.imagen,
  };
  heroId!: string;

  heroService = inject(HeroService);
  router = inject(Router);
  fb = inject(FormBuilder);
  private unsubscribe: Subject<void> = new Subject<void>();
  pageSlug!: string;

  constructor() {
    this.getDataUrl();
  }

  getDataUrl() {
    let url = window.location.href;
    let arr = url.split('/');
    this.pageSlug = arr[arr.length - 1];
    if (this.pageSlug !== 'form') {
      this.getHero();
    }
  }

  getHero() {
    this.heroService
      .getHeroById(this.pageSlug)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (data) => {
          this.hero = data;
          this.heroId = this.hero.id;
          this.imagen.url = this.hero.image.url;
          this.initInputs();
        },
        (error) => {
          console.log('Error Hero---->', error.error.message);
        }
      );
  }

  ngOnInit() {
    if (this.pageSlug === 'form') {
      this.myForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        descriptionlong: ['', Validators.required],
        intelligence: [, Validators.required],
        strength: [, Validators.required],
        speed: [, Validators.required],
        durability: [, Validators.required],
        power: [, Validators.required],
        combat: [, Validators.required],
        id: [this.hero.id],
        image: [this.hero.image],
      });
    }
  }

  initInputs() {
    if (this.pageSlug !== 'form') {
      this.myForm = this.fb.group({
        name: [this.hero.name, Validators.required],
        description: [this.hero.description, Validators.required],
        descriptionlong: [this.hero.descriptionlong, Validators.required],
        intelligence: [this.hero.intelligence, Validators.required],
        strength: [this.hero.strength, Validators.required],
        speed: [this.hero.speed, Validators.required],
        durability: [this.hero.durability, Validators.required],
        power: [this.hero.power, Validators.required],
        combat: [this.hero.combat, Validators.required],
        id: [this.hero.id, Validators.required],
        image: [this.hero.image, Validators.required],
      });
    }
  }

  get form() {
    return this.myForm.controls;
  }

  onReset() {
    this.submited = false;
    this.myForm.reset();
  }

  ramdonId() {
    return Math.floor(Math.random() * 100);
  }

  submit() {
    this.submited = true;
    if (this.form['invalid']) {
      return;
    }
    this.hero = this.myForm.value;
    if (this.pageSlug === 'form') {
      this.imagen.url =
        'https://www.superherodb.com/pictures2/portraits/10/100/10647.jpg';
      this.hero.image = this.imagen;
      this.hero.id = this.ramdonId().toString();
      this.addHero();
    } else {
      this.editHero();
    }
  }

  addHero() {
    this.heroService.addHero(this.hero).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error hero---->', error.error.message);
      }
    );
  }

  editHero() {
    this.heroService.editHero(this.hero).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error hero---->', error.error.message);
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
