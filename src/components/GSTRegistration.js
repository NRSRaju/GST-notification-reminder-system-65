// components/GSTRegistration.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { registerGST } from '../utils/api';
import { Input, Container, Title, Form, SubmitButton } from '../styles/styled';

const GSTRegistration = ({ onRegister }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await registerGST(data);
      onRegister(response.data.recruiter);
    } catch (error) {
      console.error('Error registering GST:', error);
    }
  };

  return (
    <Container>
      <Title>
        <FaUser /> Recruiter GST Registration
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name')} placeholder="Name" required />
        <Input
          {...register('email')}
          placeholder="Email"
          required
          type="email"
        />
        <Input {...register('gstNumber')} placeholder="GST Number" required />
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </Container>
  );
};

export default GSTRegistration;