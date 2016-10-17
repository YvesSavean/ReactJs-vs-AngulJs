package valeuriad.tuto.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ICityDao extends JpaRepository<City, Long> {
}