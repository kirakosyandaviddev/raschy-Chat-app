import React from 'react';
import { useFormik } from 'formik';

import { PorfileIcon } from '../envairoment';
import {Input, Button, Form, Label, UpdateProfileFormContainer, UploadButton, UploadLabel } from './updateProfileForm.style';

interface UpdateProfileFormProps {
    close: () => void
};

export const UpdateProfileForm: React.FC<UpdateProfileFormProps> = ({close}) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            oldPassword: '',
            newPassword: '',
            photo: '',
        },
        onSubmit: values => {
            close()
        },
    });

    return (
        <UpdateProfileFormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <Label htmlFor="username">username *</Label>
                <Input
                    id="username"
                    name="username"
                    placeholder="Max0302"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <Label htmlFor="email">e-mail account *</Label>
                <Input
                    id="email"
                    name="email"
                    placeholder="your mail account"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <Label htmlFor="oldPassword">Old password</Label>
                <Input
                    id="oldPassword"
                    name="oldPassword"
                    placeholder="**********"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.oldPassword}
                />
                <Label htmlFor="newPassword">New password</Label>
                <Input
                    id="newPassword"
                    name="newPassword"
                    placeholder="**********"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                />
                <Label htmlFor="photo">Photo (optional)</Label>
                <UploadLabel>
                    <PorfileIcon />
                    <Input
                        id="photo"
                        name="photo"
                        type="file"
                        onChange={formik.handleChange}
                        value={formik.values.photo}
                        hidden
                    />
                    <UploadButton>Upload</UploadButton>
                </UploadLabel>
                <Button type="submit">Update Profile Settings</Button>
            </Form>
        </UpdateProfileFormContainer>
    );
};

