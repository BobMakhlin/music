import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useCallback } from "react";
import useAlbums from "../../hooks/use-albums";
import useArtists from "../../hooks/use-artists";
import useGenres from "../../hooks/use-genres";
import AutocompleteFormField from "../../UI/Forms/Formik/AutocompleteFormField";
import { Formik } from "formik";
import * as Yup from "yup";
import AutosubmitForm from "../../UI/Forms/Formik/AutosubmitForm";

const INITIAL_FORM_STATE = {
  artist: null,
  genre: null,
  album: null,
};

const FORM_VALIDATION = Yup.object().shape({
  artist: Yup.object().notRequired(),
  genre: Yup.object().notRequired(),
  album: Yup.object().notRequired(),
});

function FilterPanel({ onChange }) {
  const [artistName, setArtistName] = useState(null);
  const [albumName, setAlbumName] = useState(null);
  const { artists } = useArtists({ name: artistName });
  const { albums } = useAlbums({ name: albumName });
  const { genres } = useGenres();

  const handleArtistInputChange = useCallback((_, newInputValue) => {
    setArtistName(newInputValue);
  }, []);
  const handleAlbumInputChange = useCallback((_, newInputValue) => {
    setAlbumName(newInputValue);
  }, []);
  const handleFormSubmit = useCallback(
    (values, { setSubmitting }) => {
      setSubmitting(false);
      onChange({
        genre: values.genre?.name,
        album: values.album?.name,
        artist: values.artist?.name,
      });
    },
    [onChange]
  );

  return (
    <Stack sx={{ gridArea: "rightbar", pl: 1, pr: 1, pt: 5 }} gap={1}>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleFormSubmit}
      >
        <AutosubmitForm>
          <AutocompleteFormField
            fieldName="artist"
            size="small"
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            filterOptions={(x) => x}
            options={artists ?? []}
            onInputChange={handleArtistInputChange}
            renderInput={(params) => (
              <TextField {...params} label="Artists" variant="filled" />
            )}
          />
          <AutocompleteFormField
            fieldName="genre"
            size="small"
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={genres ?? []}
            renderInput={(params) => (
              <TextField {...params} label="Genres" variant="filled" />
            )}
          />
          <AutocompleteFormField
            fieldName="album"
            size="small"
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            filterOptions={(x) => x}
            options={albums ?? []}
            onInputChange={handleAlbumInputChange}
            renderInput={(params) => (
              <TextField {...params} label="Albums" variant="filled" />
            )}
          />
        </AutosubmitForm>
      </Formik>
    </Stack>
  );
}

export default FilterPanel;
