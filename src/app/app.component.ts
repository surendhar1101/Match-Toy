import { Component } from '@angular/core';
import { match } from 'match-toy';

// const match = require('match-toy');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Match-Toy';
  response = {
    status: 200,
    user: {
      name: 'John Doe',
      age: 30,
      address: {
        city: 'New York',
        country: 'USA',
      },
    },
  };
  message: string = '';

  // checkResponse(response: any) {
  //   console.log(response);
  getUserResponse = match
    .case(
      '{ status: 200, user: { name: string, ...address } }',
      ({ data }: { data: any }) =>
        (this.message = `User name is ${data?.status} and lives on ${data?.user?.address?.city}`)
    )
    .else(() => 'No user found')
    .catch((e: any) => console.log('Error on getUserResponse', e))
    .end();
  // }
  // try {
  //   if (this.response && this.response.status === 200) {
  //     if (this.response.user) {
  //       let name;
  //       let address;
  //       if (
  //         this.response.user.name &&
  //         typeof this.response.user.name === 'string'
  //       ) {
  //         name = this.response.user.name;
  //       }
  //       if (this.response.user.address) {
  //         address = this.response.user.address.city;
  //       }
  //       if (name && address) {
  //         this.message = `User name is ${name} and lives on ${address}`;
  //       }
  //     } else {
  //       this.message = 'No user found';
  //     }
  //   } else {
  //     this.message = 'No user found';
  //   }
  // } catch (e) {
  //   console.log('Error on getUserResponse', e);
  // }
}
