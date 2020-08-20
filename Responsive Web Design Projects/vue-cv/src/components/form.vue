<template>
  <ValidationObserver ref="obs">
    <v-card slot-scope="{ invalid, validated }" class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login Form</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <ValidationProvider name="Name" rules="required|username">
            <v-text-field
              v-model="name"
              slot-scope="{ errors, valid }"
              :counter="12"
              :error-messages="errors"
              :append-icon="
                valid
                  ? 'mdi-check'
                  : name == ''
                  ? ''
                  : 'mdi-close-circle-outline'
              "
              :success="valid"
              label="Name"
              required
              prepend-inner-icon="mdi-account"
              :single-line="true"
              :filled="true"
              :rounded="true"
              :dense="true"
              :outlined="true"
              placeholder="Enter your username..."
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="email" rules="required|email">
            <v-text-field
              v-model="email"
              slot-scope="{ errors, valid }"
              :error-messages="errors"
              :success="valid"
              :append-icon="
                valid
                  ? 'mdi-check'
                  : email == ''
                  ? ''
                  : 'mdi-close-circle-outline'
              "
              label="E-mail"
              required
              prepend-inner-icon="mdi-email"
              :single-line="true"
              :filled="true"
              :rounded="true"
              :dense="true"
              :outlined="true"
              placeholder="Enter your email..."
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="password" rules="required|passwords">
            <v-text-field
              v-model="password"
              slot-scope="{ errors, valid }"
              :error-messages="errors"
              :success="valid"
              :append-icon="
                valid
                  ? 'mdi-check'
                  : password == ''
                  ? ''
                  : 'mdi-close-circle-outline'
              "
              label="Password"
              required
              prepend-inner-icon="mdi-lock"
              :single-line="true"
              :filled="true"
              :rounded="true"
              :dense="true"
              :outlined="true"
              placeholder="Enter your password..."
            ></v-text-field>
          </ValidationProvider>

          <!-- <ValidationProvider name="select" rules="required">
            <v-select
              v-model="select"
              slot-scope="{ errors, valid }"
              :items="items"
              :error-messages="errors"
              :success="valid"
              label="Select"
              required
            ></v-select>
          </ValidationProvider>

          <ValidationProvider rules="required" name="checkbox">
            <v-checkbox
              v-model="checkbox"
              slot-scope="{ errors, valid }"
              :error-messages="errors"
              :success="valid"
              value="1"
              label="Option"
              type="checkbox"
              required
            ></v-checkbox>
          </ValidationProvider> -->
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="clear">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="submit">Validate</v-btn>
        <v-btn color="primary" :disabled="invalid || !validated" @click="submit"
          >Sign Up</v-btn
        >
      </v-card-actions>
    </v-card>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    items: ['', 'Foo', 'Bar'],
    name: '',
    email: '',
    select: '',
    checkbox: '',
    password: '',
  }),
  methods: {
    async clear() {
      this.name = this.email = this.select = this.checkbox = ''
      await this.$nextTick(() => {
        this.$refs.obs.reset()
      })
    },
    async submit() {
      await this.$refs.obs.validate()
    },
  },
}
</script>
