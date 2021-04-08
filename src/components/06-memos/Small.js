import React, { memo } from 'react';

export const Small = memo(({ value }) => {

    console.log('Lo volvi a llamar');

    return (
        <small> {value} </small>
    )
});
