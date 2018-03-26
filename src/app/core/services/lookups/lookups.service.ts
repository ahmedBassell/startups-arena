import { Injectable } from '@angular/core';

@Injectable()
export class LookupsService {
  user: {any};
  auth: {any};
  currentEntity: {any};
  serviceProviders: any[];
  currentServiceProvider: {any};
  constructor() { }

  // User
  setUser(user) {
    this.user = user;
  }

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (this.user) return this.user;
    else return JSON.parse(localStorage.getItem('user'));
  }

  // Auth
  setAuth(auth) {
    this.auth = auth;
  }

  saveAuth(auth) {
    localStorage.setItem('auth', JSON.stringify(auth));
  }

  getAuth() {
    if (this.auth) return this.auth;
    else return JSON.parse(localStorage.getItem('auth'));
  }


  // Entity
  setCurrentEntity(currentEntity) {
    this.currentEntity = currentEntity;
  }

  saveCurrentEntity(currentEntity) {
    localStorage.setItem('entity', JSON.stringify(currentEntity));
  }

  getCurrentEntity() {
    if (this.currentEntity) return this.currentEntity;
    else return JSON.parse(localStorage.getItem('entity'))
  }


  // Service providers
  setServiceProviders(serviceProviders) {
    this.serviceProviders = serviceProviders;
  }

  saveServiceProviders(serviceProviders) {
    localStorage.setItem('service_providers', JSON.stringify(serviceProviders));
  }

  setServiceProvider(serviceProvider) {
    for(let service of this.serviceProviders) {
      if (serviceProvider.id === service.id) {
        service = serviceProvider;
      }
    }
  }

  saveServiceProvider(serviceProvider) {
    this.setServiceProvider(serviceProvider);
    localStorage.setItem('service_providers', JSON.stringify(this.serviceProviders));
  }

  getServiceProviders() {
    if (this.serviceProviders) return this.serviceProviders;
    else return JSON.parse(localStorage.getItem('service_providers'))
  }

  // current service provider
  setCurrentServiceProvider(currentServiceProvider) {
    this.currentServiceProvider = currentServiceProvider;
  }

  saveCurrentServiceProvider(currentServiceProvider) {
    localStorage.setItem('current_service_provider', JSON.stringify(currentServiceProvider));
  }

  getCurrentServiceProvider() {
    if (this.currentServiceProvider) return this.currentServiceProvider;
    else return JSON.parse(localStorage.getItem('current_service_provider'))
  }
}
