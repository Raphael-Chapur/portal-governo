from portal.governo import logger
from portal.governo.content.pessoa import Pessoa
from zope.lifecycleevent import ObjectAddedEvent
from zope.lifecycleevent import ObjectModifiedEvent


ADD_PERMISSION = "portal.governo: Add Pessoa"


def bloqueia_tipo_pessoa(content: Pessoa):
    """Alterar permissão portal.governo: Add Pessoa no objeto pessoa."""
    content.manage_permission(ADD_PERMISSION, [], acquire=False)
    logger.info(f"Remove permissão {ADD_PERMISSION} em {content.absolute_url()}")


def added(content: Pessoa, event: ObjectAddedEvent):
    """Subscriber para quando uma Pessoa é adicionada ao portal."""
    logger.info(f"Adicionada nova pessoa em {content.absolute_url()}")
    bloqueia_tipo_pessoa(content)


def modified(content: Pessoa, event: ObjectModifiedEvent):
    """Subscriber para quando uma Pessoa é alterada no portal."""
    logger.info(f"Modificada pessoa em {content.absolute_url()}")
    bloqueia_tipo_pessoa(content)
