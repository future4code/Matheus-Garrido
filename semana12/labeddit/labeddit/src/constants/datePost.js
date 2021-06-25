export const datePost = (date) => {
    const datePost = new Date(date);
    const currentDate = new Date();
    var timeDiff = Math.abs(currentDate.getTime() - datePost.getTime());
    var diffminutes = Math.ceil(timeDiff / (1000 * 60));
    var diffhours = Math.ceil(timeDiff / (1000 * 3600));
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffminutes < 60) {
        return <p>Publicado há {diffminutes} minutos</p>
      } else if (diffhours >= 1 && diffhours < 24) {
        return <p>Publicado há {diffhours} horas</p>
      } else if (diffhours >= 24) {
        return <p>Publicado há {diffDays} dias</p>
    }
}